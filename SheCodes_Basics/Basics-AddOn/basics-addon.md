# Lesson 3

## CSS Transform

### Function values

```
transform: rotate(0.5);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: skew(30deg, 20deg);
```

### Multiple function values

```
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);
```

## Transitions

Syntax:
transition: PROPERTY||all time way;

```
a {
  transition: all 200ms ease;
  opacity: 1;
  color: blue;
}

a:hover {
  opacity: 0.7;
  color: red;
}
```

Transition Opacity will be applied to all, and may look bad when the transition enlarges the object and covers another, which then will be visible behing (See final project video "Animations" Lesson 9)

# Lesson 5

## HTML Class Manipulation

```

<style>
    .dark {
      background: black;
    }

    button {
      background: black;
      color: white;
    }
```

    Solution Video:
    CHANGES to this style when the .dark class gets added to the body:

```
    .dark button {
      background: white;
      color: black;
    }
</style>
```

# Lesson 9

## Animations:

:hover instead of

```
transition: opacity
```

use

```
filter:contrast()
```

is more elegant

# Lesson 10

## Grid

if fotos are not the same size:
object-fit
ratio
