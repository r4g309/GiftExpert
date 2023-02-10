export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=fzmF2yL6tUUgeHiVls576WXTbNK12ATv&q=${category}&limit=10`
  const { data = [] } = await (await fetch(url)).json()

  const imgs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return imgs
}
