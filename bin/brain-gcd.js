#!/usr/bin/env node
import playGame from '../src/games/playGame.js'
import { gcdGame, getRule } from '../src/games/gcd.js'
playGame(gcdGame, getRule)
