export default {
  name: "profileImg",
  title: "ProfileImg",
  type: "document",
  fields: [
    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
};
