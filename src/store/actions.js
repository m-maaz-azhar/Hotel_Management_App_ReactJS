import Firebase from '../config/Firebase'

const signupUser = (user,history) => {
    return (dispatch) => {
        Firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                Firebase.database().ref('/').child(`users/${res.user.uid}`).set(user)
                sessionStorage.setItem("login_session",true)
                history.push('/')
                alert("User signup successfully")
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const loginUser = (user,history) => {
    return (dispatch) => {
            Firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    sessionStorage.setItem("login_session",true)
                    history.push(`/`)
                })
                .catch((err) => {
                    alert(err.message)
                })
    }
}

const getAllHotels = () => {
    return (dispatch) => {
        Firebase.database().ref('/').child(`hotels`)
            .once('value', (data) => {
                var arr = []
                for (var key in data.val()) {
                    arr.push({ ...data.val()[key], id: key })
                }
                dispatch({ type: "GETALLHOTELS", allHotels: arr })
            })
    }
}

export {
    signupUser,
    loginUser,
    getAllHotels,
    // getAllUsers
}