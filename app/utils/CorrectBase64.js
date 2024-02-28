export function fixBase64Format(array) {
    for (let i = 0; i < array.length; i++) {
        let { name, base64 } = array[i];
    
        if (base64.startsWith('dataimage/jpegbase64')) {
          const base64Content = base64.replace('dataimage/jpegbase64/', '');
    
          const newBase64 = `data:image/jpeg;base64,/${base64Content}`;
    
          array[i] = { name, base64: newBase64 };
        }
      }
    // Return the modified array
    return array;
  }
  