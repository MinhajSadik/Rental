const useUploadImage = () => {
    const handleUploadFile = async(fileName: string, file: File, url: string ) => {
        const formData = new FormData();
        let imageUrl = ""
        formData.append(fileName, file );
        try {
          const response = await fetch(url, {
            method: 'POST',
            body: formData,
          });
          const data = await response.json()
          imageUrl = data.data
        } catch (error) {
          console.error('Error uploading video:', error);
        }
        return imageUrl
    };
    return handleUploadFile
}

export default useUploadImage

