package entity

import "github.com/google/uuid"

type ChatItem struct {
	ChatName    string    `json:"chatName"`
	ChatUUID    uuid.UUID `json:"chatUUID"`
	LastMessage Message   `json:"lastMessage"`
	ProjectUUID uuid.UUID `json:"projectUUID"`
	ImageURL    string    `json:"imageURL"`
}
