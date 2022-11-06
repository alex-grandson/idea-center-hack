package entity

import "github.com/google/uuid"

type Chat struct {
	ID          int64     `json:"id"`
	UUID        uuid.UUID `json:"uuid"`
	Name        string    `json:"name"`
	ProjectUUID uuid.UUID `json:"project_uuid"`
}
