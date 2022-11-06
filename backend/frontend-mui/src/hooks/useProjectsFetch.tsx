import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'
import { Project } from '../types/Project'
import ProjectService from '../api/ProjectService'

function useProjectsFetch(page: number) {
  const [loading, setLoading] = useState<boolean>(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [end, setEnd] = useState<boolean>(false)

  const getProjects = useCallback(async () => {
    try {
      if (!end) {
        setLoading(true)
        const response = await ProjectService.getPageOfProjects(page)
        const data: any = response.data
        if (!data.length) {
          setEnd(true)
        }
        setProjects((prev) => [...prev, ...data])
        setLoading(false)
      }
    } catch (err) {
      console.error(err)
    }
  }, [page])

  useEffect(() => {
    getProjects()
  }, [getProjects])

  return { loading, projects }
}

export default useProjectsFetch
