<template>
  <div class="hello">
    <a href="https://github.com/kellyk/javascript-simon"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"></a>
	<div class="wrapper">
		<h1>Simon Says</h1>
			<div class="game-board">
				<div class="simon">
					<ul>
						<li class="tile red" id="red" @click="redButton"></li>
						<li class="tile blue" id="blue" @click="blueButton"></li>
						<li class="tile yellow" id="yellow" @click="yellowButton"></li>
						<li class="tile green" id="green" @click="greenButton"></li>
					</ul>
				</div>
			</div>
			<div class="game-info">
				<h2>Round: <span>{{round}}</span></h2>
				<button @click="start" >Start</button>
				<p data-action="lose">Sorry, you lost after <span data-round="0"></span> rounds!</p>
			</div>
			<div class="game-options">
				<h2>Game Options:</h2>
				<input type="radio" name="mode" value="normal" checked>Normal<br>
				<input type="radio" name="mode" value="sound-only">Sound Only<br>
				<input type="radio" name="mode" value="light-only">Light Only<br>
				<input type="radio" name="mode" value="free-board">Free board
			</div>
		<div data-action="sound"></div>
		<footer>
			Created by <a href="http://kellyking.me">Kelly King</a>
		</footer>
  </div>
  </div>
</template>

<script>
import {sleep} from '../utils/timeSleep'
export default {
  name: 'HelloWorld',
  data(){
    return {
      curNotes: [],
      difficult: '',
      round: 0,
      buttons: [this.yellowButton, this.redButton, this.greenButton, this.blueButton],
      userNotes: [],
      gameActive: false
    }
  },
  methods: {
    async start(){
      this.round = 0
      this.gameActive = true
      this.startRound()
      
    },
    async startRound(){
      if (this.round < 7){
        this.round++
        await sleep(1000)
        let randNumber = Math.floor((Math.random() * 4))
        this.curNotes.push(randNumber)
        this.userNotes = [...this.curNotes]
        for (let item of this.curNotes){
        this.buttons[item]()
        await sleep(1500)
      }
      }else{
        this.round = 0
        this.endGame()
      }
    },
    endGame(){
      console.log('end game')
      if (this.userNotes == 0) {
          alert('You win')
        }else {
          alert('You lose')
        }
      
      this.round = 0
      this.curNotes = []
      this.userNotes = []
      
    },
    async yellowButton(e){
      if (!this.gameActive) return
      if (e){
        if (this.userNotes[0] == 0){
          this.userNotes.shift()

          console.log(this.userNotes)
        }
        else{
          this.endGame()
          console.log('end')
          return
        }
      e.target.className = 'yellow tile active'
      let audio = new Audio(require('../sounds/1.ogg'))
      audio.play()
      await sleep(500)
      e.target.className = 'yellow tile'
      if (this.userNotes.length == 0){
          this.startRound()
        }
      }
      else{
      var yellow = document.querySelector("#yellow")
      yellow.className = "tile yellow active"
      
      let audio = new Audio(require('../sounds/1.ogg'))
      audio.play()
      await sleep(1000)
      yellow.className = "tile yellow"
      }
    },
    async redButton(e){
      if (!this.gameActive) return
      if (e){
        if (this.userNotes[0] == 1){
          this.userNotes.shift()
          
          console.log(this.userNotes)
        }
        else{
          this.endGame()
          console.log('end')
          return
        }
      e.target.className = 'red tile active'
      let audio = new Audio(require('../sounds/2.ogg'))
      audio.play()
      await sleep(500)
      e.target.className = 'red tile'
      if (this.userNotes.length == 0){
            this.startRound()
      }
      }
      else{
      var red = document.querySelector("#red")
      red.className = "tile red active"
      
      let audio = new Audio(require('../sounds/2.ogg'))
      audio.play()
      await sleep(1000)
      red.className = "tile red"
      }
    },
    async greenButton(e){
      if (!this.gameActive) return
      if (e){
       if (this.userNotes[0] == 2){
          this.userNotes.shift()

          console.log(this.userNotes)
        }
        else{
          console.log('end')
          this.endGame()
          return
        }
      e.target.className = 'green tile active'
      let audio = new Audio(require('../sounds/3.ogg'))
      audio.play()
      await sleep(500)
      e.target.className = 'green tile'
      if (this.userNotes.length == 0){
            this.startRound()
          }
      }
      else{
      var green = document.querySelector("#green")
      green.className = "tile green active"
      
      let audio = new Audio(require('../sounds/3.ogg'))
      audio.play()
      await sleep(1000)
      green.className = "tile green"
      }
    },
    async blueButton(e){
      if (!this.gameActive) return
      if (e){
        if (this.userNotes[0] == 3){
          this.userNotes.shift()
          console.log(this.userNotes)
        }
        else{
          console.log('end')
          this.endGame()
          return
        }
      e.target.className = 'blue tile active'
      let audio = new Audio(require('../sounds/4.ogg'))
      audio.play()
      await sleep(500)
      e.target.className = 'blue tile'
      if (this.userNotes.length == 0){
            this.startRound()
          }
      }
      else{
      var blue = document.querySelector("#blue")
      blue.className = "tile blue active"
      
      let audio = new Audio(require('../sounds/4.ogg'))
      audio.play()
      await sleep(1000)
      blue.className = "tile blue"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
	font-family: Arial, serif;
	color: #333;
	-webkit-user-select: none; /* Chrome/Safari */        
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+ */
	-o-user-select: none;
	user-select: none;
}

h1 {
	margin: 1em 0 2em;
	text-align: center;
}

ul {
	list-style: none;
}

ul, li {
	padding: 0;
	margin: 0;
}

p[data-action="lose"] {
	display: none;
}

.active {
	opacity: 1 !important;
}

.clearfix {
	width: 100%;
	clear: both;
}

.wrapper {
	width: 540px;
	margin: 0 auto;
}
.container {
	width: 305px;
}

.simon {
	background: #fff;
	position: relative;
	float: left;
	margin-right: 3em;	
	width: 302px;
	height: 295px;
	-webkit-border-radius: 150px 150px 150px 150px;
	border-radius: 150px 150px 150px 150px;
    -moz-box-shadow: 2px 1px 12px #aaa;
    -webkit-box-shadow: 2px 1px 12px #aaa;
    -o-box-shadow: 2px 1px 12px #aaa;
    box-shadow: 2px 1px 12px #aaa;
}

.tile {
	opacity: 0.6;
	-webkit-transition: opacity 250ms ease;
	-moz-transition: opacity 250ms ease;
	-ms-transition: opacity 250ms ease;
	-o-transition: opacity 250ms ease;
	transition: opacity 250ms ease;
}

.tile.lit {
	opacity: 1;
}

.red, .blue, .yellow, .green {
	height: 290px;
	-webkit-border-radius: 150px 150px 150px 150px;
	border-radius: 150px 150px 150px 150px;
	position: absolute;
	text-indent: 10000px;
}

.red:hover, .blue:hover, .yellow:hover, .green:hover {
	border: 2px solid black
}

.red {
	background: #FF5643;
	clip: rect(0px, 300px, 150px, 150px);
	width: 296px;
}

.blue {
	background: dodgerblue;
	clip: rect(0px, 150px, 150px, 0px);
	width: 300px;
}

.yellow {
	background: #FEEF33;
	clip: rect(150px, 150px, 300px, 0px);
	width: 300px;
}

.green {
	background: #BEDE15;
	clip: rect(150px,300px, 300px, 150px);
	width: 296px;
}

.game-info {
	margin-top: 90px;
}

.game-info button {
	width: 5em;
	box-sizing: border-box;
	font-size: 1.4em;
	-webkit-border-radius: 10px 10px 10px 10px;
	border-radius: 10px 10px 10px 10px;
	background: #6DABE8;
	border: none;
	padding: 0.3em 0.6em;
}

.game-info button:hover {
	background: #78BCFF;
}

.game-options h2 {
	margin-top: 30px;
	margin-bottom: 0;
}

.game-options input[type="radio"] {
	margin-right: 10px;
}

.hoverable:hover {
	cursor: pointer;
}

footer {
	position: absolute;
	bottom: 20px;
	width: 540px;
	clear: both;
	text-align: center;
}
</style>
