### Note
User authentication can either be through email or google Oauth.

## Cards Maker Authentication
The following code shows authentication container and component, with its relevant redux and redux saga calls.
- [User Sign up via email](../client/src/containers/Auth/signup.js)
- [User Sign In via email](../client/src/containers/Auth/login.js)

## Google Oauth Authentication
The code below will redirect user to google Oauth to select an account to login with. The redirection is handled on the Node JS backend with Google Oauth API integration.
```
<a href="https://cardsmaker.herokuapp.com/auth/google">
    <button
        className={`button is-info authInput`}
        type="button"
    >
        Login Via Google
    </button>
</a>
```