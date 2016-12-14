import TopicView from './components/TopicView'
import ResourceCard from 'components/Resource/ResourceCard';

// Sync route definition
export default {
  path: '/topic/:tid',
  component : TopicView,
  childRoutes: [
    {path: 'resource/:resource', component: ResourceCard }
  ]
}
