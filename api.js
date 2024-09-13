export const fetchColors = async () => {
    const response = await fetch('https://x-colors.yurace.pro/api/random/blue', {
        // headers: {
        //    'Access-Control-Allow-Origin': true
        // },
        mode: "cors"
    });
    if (!response.ok) {
      throw new Error('Failed to fetch colors');
    }
    const data = await response.json();
    return data;
  };
  