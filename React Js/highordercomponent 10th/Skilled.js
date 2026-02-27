import React from "react"
const Skilled = (Student,hours) => {
    class SkilledStudent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                course: this.props.setCourse,
                duration: 0,
                check: false
            }
        }

        onTrainingInProgress = () => {
            if (this.state.duration === 10) {
                this.setState({
                    check: true
                })
            } else {
                this.setState({
                    duration: this.state.duration + hours
                })
            }

        }

        render() {
            return (
                <Student
                    hocGrade="CERTIFIED"
                    hocCourse={this.state.course}
                    hocDuration={this.state.duration}
                    hocOnTrainingInProgress={this.onTrainingInProgress}
                    hocCheck={this.state.check}
                    {...this.props}
                />
            )
        }
    }
    return SkilledStudent
}

export default Skilled