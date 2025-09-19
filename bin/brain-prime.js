#!/usr/bin/env node
import playGame from '../src/games/playGame.js'
import { primeGame, getRule } from '../src/games/prime.js'
playGame(primeGame, getRule)
