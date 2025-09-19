#!/usr/bin/env node
import playGame from '../src/games/playGame.js'
import { evenGame, getRule } from '../src/games/even.js'
playGame(evenGame, getRule)
