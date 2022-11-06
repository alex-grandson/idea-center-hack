package usecase

import (
	"context"
	"github.com/google/uuid"
	"lg/internal/entity"
)

type (
	UserRp interface {
		GetUserByEmail(context.Context, string) (entity.User, error)
		GetUserByUUID(context.Context, uuid.UUID) (entity.User, error)
		StoreUser(context.Context, entity.User) error
		ChangePassword(context.Context, entity.User) error
	}

	UserContract interface {
		GetUser(context.Context, string) (entity.User, error)
		GetUserByUUID(context.Context, uuid.UUID) (entity.User, error)
		StoreUser(context.Context, entity.User) error
		CheckUserExistence(context.Context, string) (bool, error)
		ChangePassword(context.Context, string, string) error
	}

	JwtContract interface {
		CompareUserPassword(context.Context, entity.User) error
		GenerateToken(string) (string, error)
		CheckToken(token string) (string, error)
	}

	RegisterContract interface {
		CreateNewUser(context.Context, string, string) (uuid.UUID, error)
	}

	ProjectRp interface {
		GetAllProjects(context.Context, uint, uint) ([]entity.Project, error)
		GetProjectByUUID(context.Context, uuid.UUID) (entity.Project, error)
		CreateProject(context.Context, entity.Project) (uuid.UUID, error)
		DeleteProjectByUUID(context.Context, uuid.UUID) error
	}

	ProjectContract interface {
		GetAllProjects(context.Context, uint, uint) ([]entity.Project, error)
		GetProjectByUUID(context.Context, uuid.UUID) (entity.Project, error)
		CreateProject(context.Context, entity.Project, []uuid.UUID) (uuid.UUID, error)
		DeleteProjectByUUID(context.Context, uuid.UUID) error
		CheckProjectExistenceByProjectUUID(context.Context, uuid.UUID) (bool, error)
	}

	LineupRp interface {
		GetLineupByProjectUUID(context.Context, uuid.UUID) (entity.Lineup, error)
		DeleteLineupByProjectUUID(context.Context, uuid.UUID) error
		CreateLineup(context.Context, entity.Lineup) error
	}

	LineupContract interface {
		DeleteLineupByProjectUUID(context.Context, uuid.UUID) error
		CheckLineupExistenceByProjectUUID(context.Context, uuid.UUID) (bool, error)
		CreateLineup(context.Context, entity.Lineup) error
	}

	MessageRp interface {
		StoreMessage(context.Context, entity.Message) error
		GetLastMessageByChat(context.Context, uuid.UUID) (entity.Message, error)
		UpdateMessageStatus(context.Context, uuid.UUID, uuid.UUID) error
	}

	ChatRp interface {
		CreateChat(context.Context, entity.Chat) error
		GetChatHistory(context.Context, uuid.UUID) ([]entity.Message, error)
		AddUserIntoChat(context.Context, uuid.UUID, uuid.UUID) error
		GetAllChatsByUser(context.Context, uuid.UUID) ([]entity.Chat, error)
		DeleteUserFromChat(context.Context, uuid.UUID, uuid.UUID) error
		GetCreatorByChat(context.Context, uuid.UUID) (uuid.UUID, error)
		GetChatByCreator(context.Context, uuid.UUID) (uuid.UUID, error)
	}

	MessageContract interface {
		StoreMessage(context.Context, entity.Message) error
		GetLastMessageByChat(context.Context, uuid.UUID) (entity.Message, error)
		UpdateMessageStatus(ctx context.Context, user uuid.UUID, chat uuid.UUID) error
	}

	ChatContract interface {
		CreateChat(context.Context, string, []uuid.UUID) (uuid.UUID, error)
		GetAllChatsByUser(context.Context, uuid.UUID) ([]entity.ChatItem, error)
		GetChatHistory(context.Context, uuid.UUID) ([]entity.Message, error)
		AddUserIntoChat(context.Context, uuid.UUID, uuid.UUID) error
		DeleteUserFromChat(ctx context.Context, chat uuid.UUID, user uuid.UUID) error
		GetCreatorByChat(context.Context, uuid.UUID) (uuid.UUID, error)
		GetChatByCreator(context.Context, uuid.UUID) (uuid.UUID, error)
	}

	ProfileRp interface {
		GetProfileByUser(context.Context, uuid.UUID) (entity.Profile, error)
		CreateProfile(context.Context, entity.Profile) (entity.Profile, error)
		CheckFkProfile(ctx context.Context, profile entity.Profile) (string, error)
	}

	ProfileContract interface {
		GetProfileByUser(context.Context, uuid.UUID) (entity.Profile, error)
		CreateProfile(context.Context, entity.Profile, string, string, string) (entity.Profile, error)
		CheckFkProfile(ctx context.Context, profile entity.Profile) (bool, string, error)
	}

	CountryRp interface {
		GetAllCountries(ctx context.Context) ([]entity.Country, error)
	}

	CountryContract interface {
		GetAllCountries(ctx context.Context) ([]entity.Country, error)
	}

	CitizenshipRp interface {
		GetAllCitizenships(ctx context.Context) ([]entity.Citizenship, error)
	}

	CitizenshipContract interface {
		GetAllCitizenships(ctx context.Context) ([]entity.Citizenship, error)
	}

	UniversityRp interface {
		GetAllUniversities(ctx context.Context) ([]entity.University, error)
	}

	UniversityContract interface {
		GetAllUniversities(ctx context.Context) ([]entity.University, error)
	}

	EduspecialityRp interface {
		GetAllEduspecialities(ctx context.Context) ([]entity.Eduspeciality, error)
	}

	EduspecialityContract interface {
		GetAllEduspecialities(ctx context.Context) ([]entity.Eduspeciality, error)
	}

	EmploymentRp interface {
		GetAllEmployments(ctx context.Context) ([]entity.Employment, error)
	}

	EmploymentContract interface {
		GetAllEmployments(ctx context.Context) ([]entity.Employment, error)
	}

	SpecializationRp interface {
		GetAllSpecializations(ctx context.Context) ([]entity.Specialization, error)
	}

	SpecializationContract interface {
		GetAllSpecializations(ctx context.Context) ([]entity.Specialization, error)
	}

	CityRp interface {
		GetCitiesByCountryUUID(context.Context, uuid.UUID) ([]entity.City, error)
	}

	CityContract interface {
		GetCitiesByCountryUUID(context.Context, uuid.UUID) ([]entity.City, error)
	}

	CategoryRp interface {
		GetAllCategory(context.Context) ([]entity.Category, error)
	}

	CategoryContract interface {
		GetAllCategory(context.Context) ([]entity.Category, error)
	}

	CompanyRp interface {
		GetCompanyByInn(context.Context, string) (entity.Company, error)
		CreateCompany(context.Context, entity.Company) (uuid.UUID, error)
	}

	CompanyContract interface {
		CheckCompanyExistenceByInn(context.Context, string) (bool, error)
		GetCompanyByInn(context.Context, string) (entity.Company, error)
		CreateCompany(context.Context, entity.Company) (uuid.UUID, error)
	}

	AchievementRp interface {
		CreateAchievement(context.Context, string) (uuid.UUID, error)
	}

	AchievementContract interface {
		CreateAchievement(context.Context, string) (uuid.UUID, error)
	}

	TeamRp interface {
		CreateTeam(context.Context, entity.Team) (uuid.UUID, error)
	}

	TeamContract interface {
		CreateTeam(context.Context, entity.Team) (uuid.UUID, error)
	}
)
