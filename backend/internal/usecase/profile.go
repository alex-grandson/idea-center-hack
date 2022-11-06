package usecase

import (
	"context"
	"fmt"
	"github.com/google/uuid"
	"lg/internal/entity"
)

type ProfileUseCase struct {
	repo ProfileRp
	cp   CompanyContract
	ac   AchievementContract
}

var _ ProfileContract = (*ProfileUseCase)(nil)

func NewProfileUseCase(repo ProfileRp, cp CompanyContract, ac AchievementContract) *ProfileUseCase {
	return &ProfileUseCase{repo: repo, cp: cp, ac: ac}
}

func (p *ProfileUseCase) GetProfileByUser(ctx context.Context, uuid uuid.UUID) (entity.Profile, error) {
	return p.repo.GetProfileByUser(ctx, uuid)
}

func (p *ProfileUseCase) CreateProfile(ctx context.Context, profile entity.Profile, companyName, companyInn, achievement string) (entity.Profile, error) {
	checkFlag, msg, err := p.CheckFkProfile(ctx, profile)
	switch {
	case err != nil:
		return entity.Profile{}, err
	case !checkFlag:
		return entity.Profile{}, fmt.Errorf("there is no entity: %s with this uuid", msg)
	}
	if (companyName == "") || (companyInn == "") {
		profile.CompanyUUID = uuid.Nil
	} else {
		companyKey, err := p.cp.CreateCompany(ctx, entity.Company{Name: companyName, Inn: companyInn})
		if err != nil {
			return entity.Profile{}, fmt.Errorf("error in creating company: %w", err)
		}
		profile.CompanyUUID = companyKey
	}
	// создангие ачивмента
	achievementKey, err := p.ac.CreateAchievement(ctx, achievement)
	if err != nil {
		return entity.Profile{}, err
	}
	profile.AchievementUUID = achievementKey
	return p.repo.CreateProfile(ctx, profile)
}

func (p *ProfileUseCase) CheckFkProfile(ctx context.Context, profile entity.Profile) (bool, string, error) {
	str, err := p.repo.CheckFkProfile(ctx, profile)
	switch {
	case err != nil:
		return false, "", err
	case str == "ok":
		return true, "", nil
	default:
		return false, str, nil
	}
}
