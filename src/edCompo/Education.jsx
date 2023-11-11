import './education.css'
const Education = ({classs,schollName,passYear}) => {
  return (
    <div className="educationDetails">
        <p className="std">{classs}</p>
        <p className="schoolName">{schollName}</p>
        <p className="paassYear">{passYear}</p>
    </div>
  )
}

export default Education