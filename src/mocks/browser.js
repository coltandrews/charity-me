import { rest } from 'msw'
import { setupWorker } from 'msw'
// JSON response data
import charlestonData from '../data/charleston-nonprofits.json'
import charlestonClub from '../data/charleston-club.json'
import charlestonJazz from '../data/charleston-jazz.json'


// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
  rest.get('https://projects.propublica.org/nonprofits/api/v2/search.json?q=charleston', (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json(charlestonData)) // respond using a mocked JSON body
  }),
  rest.get('https://projects.propublica.org/nonprofits/api/v2/organizations/830504523.json', (req, res, ctx) => { // capture "GET /greeting" requests
  return res(ctx.json(charlestonJazz)) // respond using a mocked JSON body
})
)