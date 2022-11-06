package v1

import (
	"github.com/gin-gonic/gin"
	"lg/internal/usecase"
	"net/http"
)

type registerContract struct {
	s usecase.RegisterContract
	j usecase.JwtContract
}

func newRegisterRoutes(handler *gin.RouterGroup, si usecase.RegisterContract, j usecase.JwtContract) {
	s := registerContract{s: si, j: j}

	handler.POST("/register", s.register)
}

type registerRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type registerResponse struct {
	UUID string `json:"uuid"`
}

// Register godoc
// @Summary registration
// @Tags Posts
// @Description Create new user
// @Param 		request body registerRequest true "query params"
// @Success     200 {object} registerResponse
// @Failure     400 {object} errResponse
// @Router      /api/v1 [post]
func (s *registerContract) register(c *gin.Context) {
	var request registerRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		errorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	ud, err := s.s.CreateNewUser(c.Request.Context(), request.Email, request.Password)
	if err != nil {
		errorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	token, err := s.j.GenerateToken(ud.String())
	if err != nil {
		errorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	c.SetCookie("access", token, 120*60, "*", "", false, true)
	c.JSON(http.StatusOK, registerResponse{ud.String()})
}
