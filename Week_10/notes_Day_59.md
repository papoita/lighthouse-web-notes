<!-- @format -->

January 4, 2022
Keyframes to make animations

```
@keyframes arrowdown {
	from {
		transform: translate3d(0, -5px, 0);
	}
	to {
		transform: translate3d(0, 5px, 0);
	}
}

#double-down {
	display: block;
	color: red;
	animation: arrowdown 0.8s;
	animation-direction: alternate;
	animation-iteration-count: infinite;
}
```
