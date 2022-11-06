package v1

import (
	"github.com/gin-gonic/gin"
	"lg/internal/usecase"
	"net/http"
)

type companyRoutes struct {
	cs usecase.CompanyContract
	j  usecase.JwtContract
}

type reqInnDTO struct {
	Inn string `json:"inn"`
}

type resInnDTO struct {
	Result bool `json:"result"`
}

func newCompanyRoutes(handler *gin.RouterGroup, cs usecase.CompanyContract, j usecase.JwtContract) {
	cr := &companyRoutes{cs: cs, j: j}
	handler.POST("/company/inn", cr.checkInn)
}

// @Summary CheckCompanyByInn
// @Tags Company
// @Description Check company by inn
// @Param input body reqInnDTO true "enter company inn"
// @Success 200 {object} resInnDTO
// @Failure 400 {object} errResponse
// @Failure 500 {object} errResponse
// @Router /api/v1/company/inn/ [post]
func (cr *companyRoutes) checkInn(c *gin.Context) {
	access, err := c.Cookie("access")
	if err != nil {
		errorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	_, err = cr.j.CheckToken(access)
	if err != nil {
		errorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	req := new(reqInnDTO)
	if err := c.ShouldBindJSON(&req); err != nil {
		errorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	res, err := cr.cs.CheckCompanyExistenceByInn(c.Request.Context(), req.Inn)
	if err != nil {
		errorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	c.JSON(http.StatusOK, resInnDTO{res})
}
