package usecase

import (
	"context"
	"fmt"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
	"lg/internal/entity"
)

type UserUseCase struct {
	repo UserRp
}

var _ UserContract = (*UserUseCase)(nil)

func NewUserUseCase(repo UserRp) *UserUseCase {
	return &UserUseCase{
		repo: repo,
	}
}

func (u *UserUseCase) GetUser(ctx context.Context, email string) (entity.User, error) {
	return u.repo.GetUserByEmail(ctx, email)
}

func (u *UserUseCase) GetUserByUUID(ctx context.Context, user uuid.UUID) (entity.User, error) {
	return u.repo.GetUserByUUID(ctx, user)
}

func (u *UserUseCase) StoreUser(ctx context.Context, user entity.User) error {
	return u.repo.StoreUser(ctx, user)
}

func (u *UserUseCase) CheckUserExistence(ctx context.Context, email string) (bool, error) {
	us, err := u.repo.GetUserByEmail(ctx, email)
	if err != nil {
		return true, err
	}
	if len(us.Email) > 0 || len(us.Password) > 0 {
		return true, nil
	}
	return false, nil
}

func (u *UserUseCase) ChangePassword(ctx context.Context, email string, password string) error {
	if len(password) <= 4 {
		return fmt.Errorf("error in password format")
	}
	passwordHash, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	if err != nil {
		return fmt.Errorf("cannot hash new password")
	}
	return u.repo.ChangePassword(ctx, entity.User{
		Email:    email,
		Password: string(passwordHash),
	})
}
