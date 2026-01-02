// src/services/api.ts

export async function simulateWorkflow(data: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        output: data,
      });
    }, 500);
  });
}
