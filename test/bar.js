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

test('Avoid creating duplicates', async t => {
  const bar = (await request(app)
    .post('/bar')
    .send({
      name: 'Berghain',
      address: 'Ostkreuz.',
      placeid: '68768376adssds'
    })).body

  const duplicatedBar = (await request(app)
    .post('/bar')
    .send({
      name: 'Berghain',
      address: 'Ostkreuz.',
      placeid: '68768376adssds'
    })).body

  const res = await request(app).get('/bar')

  t.is(res.status, 200)
  t.true(Array.isArray(res.body), 'Body should be an array')
  t.true(res.body.filter(x => x._id == bar._id).length === 1)
})

test('Fetch a bar', async t => {
  t.plan(2)

  const bar = (await request(app)
    .post('/bar')
    .send({
      name: 'Paloma',
      address: 'Reuterstr.',
      placeid: '236826hhgsdjgwy'
    })).body

  const fetch = await request(app).get(`/bar/${bar._id}/json`)

  t.is(fetch.status, 200)
  t.deepEqual(fetch.body, bar)
})

test('Delete a bar', async t => {
  t.plan(3)

  const bar = (await request(app)
    .post('/bar')
    .send({
      name: 'Lagari',
      address: 'Hobrechstr.',
      placeid: '7638263872'
    })).body

  const del = await request(app).delete(`/bar/${bar._id}`)

  t.is(del.status, 200)
  t.is(del.text, `Bar deleted from the database`)

  const fetch = await request(app).get(`/bar/${bar._id}/json`)

  t.is(fetch.status, 404)
})

test('Add many entries', async t => {
  const barArray = [
    {
      name: 'K-fetisch',
      address: 'Hobrechstr.',
      placeid: 'iuweyeiuwhdskjsdh7'
    },
    {
      name: 'Wilders',
      address: 'Hermannpl.',
      placeid: 'kssddshdu77'
    }
  ]

  const res = await request(app)
    .post('/bar/add-many')
    .send(barArray)

  t.is(res.status, 200)
  t.deepEqual(res.body, barArray)
})
