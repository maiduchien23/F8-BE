async function shortUrl(longUrl) {
  const apiUrl = `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(
    longUrl
  )}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.ok) {
      return data.result.full_short_link;
    } else {
      throw new Error("Rút gọn URL không thành công.");
    }
  } catch (error) {
    throw new Error(`Đã xảy ra lỗi khi rút gọn URL: ${error.message}`);
  }
}

const originalLink = "https://www.youtube.com/watch?v=GQ-toR8F7rc&t=483s";

shortUrl(originalLink)
  .then((shortLink) => console.log(`URL rút gọn: ${shortLink}`))
  .catch((error) => console.error(error.message));
