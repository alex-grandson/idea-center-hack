import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import CommentIcon from '@mui/icons-material/Comment'
import IconButton from '@mui/material/IconButton'
import { Divider } from '@mui/material'
import { Project } from '../../types/Project'

interface ProjectCardProps {
  project: Project
}

const ProjectModalContent: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      sx={{
        display: 'inline-block',
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        maxHeight: '150%',
        borderRadius: '25px',
        margin: '0 auto',
        boxShadow: 3,
      }}
    >
      <CardMedia
        component='img'
        height='250px'
        image={project.image}
        alt={project.name}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {project.date}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            height: '50px',
          }}
        >
          <Avatar alt={project.creator.firstname} src={project.creator.image} />
          <Typography
            sx={{ alignSelf: 'center' }}
          >{`${project.creator.firstname} ${project.creator.lastname}`}</Typography>
        </Box>
        <Typography variant='h5' component='div' sx={{ textAlign: 'center' }}>
          {project.name}
        </Typography>
        <Divider variant='middle' sx={{ mt: '1%' }} />
        <Box sx={{ display: 'flex', gap: '1%' }}>
          <Box sx={{ width: '80%', mt: '4px' }}>{project.description}</Box>
          <Divider orientation='vertical' flexItem />
          <Box sx={{ width: '20', overflow: 'auto' }}>
            {project.slots.map((value) => (
              <ListItem
                sx={{ pt: 0, overflow: 'auto' }}
                disableGutters
                secondaryAction={
                  <IconButton aria-label='comment'>
                    <CommentIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={`${value.category}`} />
              </ListItem>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProjectModalContent
