// authUtils.js
export const logout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
};

export const loginAPI = async (body) => {
    const url = "https://rtssolutions.cloud/api/v1/login.php";
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in loginAPI:', error);
      throw error; 
    }
  };