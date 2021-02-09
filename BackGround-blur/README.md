## BackGround Blur

css property used is "filter : blur()" takes px or rem or em value.

Note : It will be applied on all its child as well so make a separate div out of box.

##### Normal

<img src="./images/normal.png" width="700"/>

##### On Hover

<img src="./images/onHover.png" width="700"/>

### Styling another div on hover?

Yes one can do that, but only if #b is after #a in the HTML.
If #b comes immediately after #a

#a:hover + #b {
background: #ccc
}

<div id="a">Div A</div>
<div id="b">Div B</div>

That's using the adjacent sibling combinator (+).

If there are other elements between #a and #b.

#a:hover ~ #b {
background: #ccc
}

<div id="a">Div A</div>
<div>random other elements</div>
<div>random other elements</div>
<div>random other elements</div>
<div id="b">Div B</div>

That's using the general sibling combinator (~).

Both + and ~ work in all modern browsers and IE7+

If #b is a descendant of #a, you can simply use #a:hover #b.
