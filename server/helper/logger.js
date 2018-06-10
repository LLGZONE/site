const log4js = require('log4js');
const fs = require('fs');
const DEFAULT_FORMAT = `:remote-adr -- :method :url HTTP/:http-version :status :content-length :referer :user-agent`;
