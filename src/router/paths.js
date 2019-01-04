/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/new-event',
    name: 'New Event',
    view: 'NewEvent'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/view-event/:id',
    name: 'View Event',
    view: 'ViewEvent',
    props: true
  }

]
