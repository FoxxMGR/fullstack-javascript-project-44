#!/usr/bin/env node
import playGame from '../src/games/playGame.js'
import { progressionGame, getRule } from '../src/games/progression.js'
playGame(progressionGame, getRule)
