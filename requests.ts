const requestHeaders = {
  'Wanikani-Revision': '20170710',
};

export function fetchAssignments(token: string) {
  const headers = { ...requestHeaders, Authorization: `Bearer ${token}` };
  return fetch('https://api.wanikani.com/v2/assignments', { headers } );
}

export function fetchReviews(token: string) {
  const headers = { ...requestHeaders, Authorization: `Bearer ${token}` };
  return fetch('https://api.wanikani.com/v2/reviews', { headers } );
}

export function fetchStudyMaterials(token: string, ids?: number[]) {
  const headers = { ...requestHeaders, Authorization: `Bearer ${token}` };
  let url = `https://api.wanikani.com/v2/study_materials`;
  if (Array.isArray(ids)) {
    url += `?ids=${ids}`;
  }
  return fetch(url, { headers } );
}

export function fetchSubjects(token: string, ids?: number[]) {
  const headers = { ...requestHeaders, Authorization: `Bearer ${token}` };
  let url = `https://api.wanikani.com/v2/subjects`;
  if (Array.isArray(ids)) {
    url += `?ids=${ids}`;
  }
  return fetch(url, { headers } );
}