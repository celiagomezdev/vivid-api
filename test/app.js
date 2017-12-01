import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Render index page', async t => {
  const renderedPage = await request(app).get('/')

  t.is(renderedPage.status, 200)
})
