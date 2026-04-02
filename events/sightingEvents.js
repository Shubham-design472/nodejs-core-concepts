import {createAlert} from '../utils/createAlert.js'
import { EventEmitter } from 'node:events'

export const sightingEvents=new EventEmitter()




sightingEvents.on('sighting-added',createAlert)

