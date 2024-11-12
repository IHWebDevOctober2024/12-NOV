# Lifecycle of components in REACT

## 1. Mounting
When a component is rendered for the first time, it is called mounting. 
To handle code ONLY when the component is mounted we use the hook `useEffect` with an empty dependency array.

```jsx
useEffect(() => {
  // code to run when component is mounted
}, [])
```

## 2. Updating
When a component is updated. 
To handle code ONLY when a state variable or prop changes we use the hook `useEffect` with a dependency array.

```jsx
useEffect(() => {
  // code to run when state variable or prop changes
}, [stateVariable, prop])
```

## 3. Unmounting
When a component is removed from the DOM.

```jsx
useEffect(() => {
  return () => {
    // code to run when component is unmounted
  }
}, [])
```