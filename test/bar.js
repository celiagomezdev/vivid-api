import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Get list of bars', async t => {
  const barToCreate = {
    name: 'Natascha',
    address: 'Weserstr.',
    placeid: 'hjsgjhdsg56215673562'
  }

  const creation = await request(app)
    .post('/bar')
    .send(barToCreate)

  const res = await request(app).get('/bar')

  t.is(res.status, 200)
  t.true(Array.isArray(res.body), 'Body should be an array')
  t.true(res.body.length > 0)
})

test('Create a new bar', async t => {
  const barToCreate = {
    name: 'Aloma',
    address: 'Pannierstr.',
    placeid: 'skjhdkjah45435342'
  }

  const res = await request(app)
    .post('/bar')
    .send(barToCreate)

  t.is(res.status, 200)
  t.is(res.body.name, barToCreate.name)
  t.is(res.body.address, barToCreate.address)
  t.is(res.body.placeid, barToCreate.placeid)
})

// test('Create a duplicated bar', async t => {
//   const duplicatedBarToCreate = {
//     name: 'A',
//     address: 'Pannierstr.',
//     placeid: 'skjhdkjahk76786'
//   }

//   const res = await request(app)
//     .post('/bar')
//     .send(duplicatedBarToCreate)

//   t.is(res.status, 200)
//   t.is(res.body.name, duplicatedBarToCreate.name)
//   t.is(res.body.address, duplicatedBarToCreate.address)
//   t.is(res.body.placeid, duplicatedBarToCreate.placeid)
// })
