import { FC, useState, useEffect } from 'react'
import ContentContainer from '../../components/global/ContentContainer'
import ProjectCard from '../../components/project/ProjectCard'
import ProjectService from '../../api/ProjectService'
import { Project } from '../../types/Project'
import Grid from '@mui/material/Grid'
import useProjectsFetch from '../../hooks/useProjectsFetch'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

const ProjectPage: FC = () => {
  const { loadMoreRef, page } = useInfiniteScroll()
  const { loading, projects } = useProjectsFetch(page)
  // const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <ContentContainer>
        {projects.map((item, index) => (
          <Grid item xs={6}>
            <ProjectCard project={item} key={index} />
          </Grid>
        ))}
      </ContentContainer>
      <div style={{ position: 'relative', bottom: '500px' }} ref={loadMoreRef}>
        YAKOR'
      </div>
    </>
  )
}

export default ProjectPage
