#!/usr/bin/env node
import playGame from '../src/games/playGame.js'
import { calcGame, getRule } from '../src/games/calc.js'
playGame(calcGame, getRule)
