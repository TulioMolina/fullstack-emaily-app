// eslint-disable-next-line
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  const invalidEmails = emails
    .trim()
    .replace(/^,+|,+$/g, "")
    .split(",")
    .map((email) => email.trim())
    .filter((email) => re.test(email) === false);

  if (invalidEmails.length && invalidEmails[0]) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};
