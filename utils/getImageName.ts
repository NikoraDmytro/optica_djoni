export const getImageName = (url : string) => {
    const nameWithExtension = url.replace(/.+\//, "");
   
    const name = nameWithExtension.replace(/\.\w+$/, "")

    return name;
}