export function PngImage(props) {
    const { imageName, onClick, classImage } = props
    return (
        <img
            src={require("../../Assets/Images/"+ imageName + ".png")}
            alt={imageName}
            onClick={onClick}
            className={classImage}
        />
    )
}

export function JpgImage(props) {
    const { imageName, onClick, classImage } = props
    return (
        <img
            src={require("../../Assets/Images/"+ imageName + ".jpg")}
            alt={imageName}
            onClick={onClick}
            className={classImage}
        />
    )
}