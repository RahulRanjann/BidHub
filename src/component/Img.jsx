  import React, { useState } from 'react';
  import { PlusOutlined } from '@ant-design/icons';
  import { Image, Upload, message } from 'antd';

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const Img = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);

    const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
    };

    const handleChange = async ({ fileList: newFileList }) => {
      await getBase64(newFileList[0]?.originFileObj).then((res) => {
        setFileList(newFileList);
        console.log({ res });
      })

      
    };

    const beforeUpload = (file) => {
      const isImage = file.type.startsWith('image/');
      const isPDF = file.type === 'application/pdf';

      const isImageUploaded = fileList.some((file) => file.type.startsWith('image/'));
      const pdfCount = fileList.filter((file) => file.type === 'application/pdf').length;

      if (isImage && isImageUploaded) {
        message.error('Only one image can be uploaded.');
        return Upload.LIST_IGNORE;
      }

      if (isPDF && pdfCount >= 2) {
        message.error('Only two PDFs can be uploaded.');
        return Upload.LIST_IGNORE;
      }

      // return (isImage || isPDF) ? true : Upload.LIST_IGNORE;
      return false;
    };

    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

      const handleBerforeUpload = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = function(event) {
            const arrayBuffer = event.target.result;
            const blob = new Blob([arrayBuffer], { type: file.type });

            resolve(blob);
          }

          reader.onerror = function(error) {
            console.log(error);
            reject(error);
          }

          reader.readAsArrayBuffer(file);

        })
      }

    const handleCustomRequest = async ({file, onSuccess, onError}) => {
      try{
        const blob = await handleBerforeUpload(file);
        console.log("file is ready to be uploaded",blob);
        setTimeout(() => {
          onSuccess("ok");
          console.log("file is uploaded");
        }, 1000);
      }
      catch(error){
        onError(error)
        console.log(error);
      }
    }
    return (
      <>
        <Upload
          action="http://localhost:5173/"
          listType="picture"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          // beforeUpload={beforeUpload}
          accept="image/*,application/pdf"
          showUploadList={false}
          customRequest={ handleCustomRequest }
        >
          {fileList.length < 3 ? uploadButton : null}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{ display: 'none' }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(''),
            }}
            src={previewImage}
          />
        )}
      </>
    );
  };

  export default Img;
