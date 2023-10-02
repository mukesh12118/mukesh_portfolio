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