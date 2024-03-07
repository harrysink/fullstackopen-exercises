const App = () => {
  const course = {
    courseName: 'Half Stack application development',
    parts: [
      {
        name1: 'Fundamentals of React',
        exercises: 10
      },
      {
        name2: 'Using props to pass data',
        exercises: 7
      },
      {
        name3: 'State of a component',
        exercises: 14
      }
    ]
  }

  const courseName = course.courseName
  const Header = () => {
    console.log(courseName)
    return (
      <>
        <h1>{course.courseName}</h1>
      </>
    )
  }

  const Content = () => {
    console.log(course.parts[0].name1)
    console.log(course.parts[1].name2)
    console.log(course.parts[2].name3)
    return (
      <>
        <p>{course.parts[0].name1}: {course.parts[0].exercises}</p>
        <p>{course.parts[1].name2}: {course.parts[1].exercises}</p>
        <p>{course.parts[2].name3}: {course.parts[2].exercises}</p>
      </>
    )
  }

  const Total = () => {
    console.log(course.parts[0].exercises)
    console.log(course.parts[1].exercises)
    console.log(course.parts[2].exercises)
    return (
      <>
        <p>Number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
      </>
    )
  }

  return (
    <>
      <Header />
      <Content />
      <Total />
    </>
  )
}

export default App
