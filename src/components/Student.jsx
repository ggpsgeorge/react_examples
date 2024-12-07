import propTypes from 'prop-types'

function Student(props) {

    return(
        <div>
            <p>
            Student Name: {props.name}<br></br>
            Age: {props.age}<br></br>
            Recovery: {!props.isRecoverying ? "No" : "Yes" }
            </p>
        </div>
    );
}

Student.PropTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isRecoverying: propTypes.bool
}

Student.defaultProps = {
    name: "New Student",
    age: 15,
    isRecoverying: false
}

export default Student