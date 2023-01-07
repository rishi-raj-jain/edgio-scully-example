import { Router } from '@edgio/core/router'
import { isProductionBuild } from '@edgio/core/environment'

const router = new Router()

if (isProductionBuild()) {
  router.static('dist/static')
} else {
  router.fallback(({ renderWithApp }) => {
    renderWithApp()
  })
}

export default router
