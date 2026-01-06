# Dependency Analysis and Upgrade Recommendations

## Overview

This document provides a comprehensive analysis of the project's dependencies, identifies outdated packages, and recommends upgrade paths.

## Backend Dependencies Status

### Critical - Outdated Tooling

#### babel-cli (^6.26.0) → Deprecated
- **Current**: babel-cli v6
- **Status**: Deprecated, end-of-life
- **Recommendation**: Migrate to Babel 7+ or consider using `node --loader`
- **Impact**: High - affects transpilation pipeline
- **Action**: Upgrade to latest Babel 7 (v7.24+)
- **Migration Path**:
  ```bash
  npm install --save-dev @babel/cli@latest @babel/core@latest @babel/preset-env@latest
  npm uninstall babel-cli babel-preset-es2015 babel-core
  ```

#### babel-preset-es2015 (^6.24.1) → Deprecated
- **Status**: Deprecated in Babel 7+
- **Replacement**: `@babel/preset-env`
- **Update .babelrc**:
  ```json
  {
    "presets": ["@babel/preset-env"]
  }
  ```

### High Priority - Security & Stability

#### express (^4.15.4) → Outdated
- **Current**: 4.15.4 (Sept 2017)
- **Latest**: 4.18.2+
- **Security Issues**: Known vulnerabilities in this version
- **Recommendation**: Upgrade to 4.18.2 or later
- **Breaking Changes**: Minimal, mostly internal improvements
- **Action**: `npm install express@latest --save`

#### jsonwebtoken (^8.0.1) → Outdated
- **Current**: 8.0.1 (Sept 2017)
- **Latest**: 9.1.0+
- **Security**: Contains security patches
- **Recommendation**: Upgrade to 9.x
- **Action**: `npm install jsonwebtoken@latest --save`

#### passport (^0.4.0) & passport-jwt (^3.0.0) → Outdated
- **Current**: Passport 0.4.0 (May 2017), passport-jwt 3.0.0
- **Latest**: Passport 0.6.0+, passport-jwt 4.0.0+
- **Recommendation**: Upgrade both to latest versions
- **Action**:
  ```bash
  npm install passport@latest passport-jwt@latest --save
  ```

#### body-parser (^1.17.3) → Outdated
- **Current**: 1.17.3 (Feb 2017)
- **Latest**: 1.20.2+
- **Status**: Most functionality integrated into Express 4.16.0+
- **Recommendation**: Can potentially remove and use Express built-in `express.json()` and `express.urlencoded()`
- **Action**: Test removal or upgrade to latest

#### lodash (^4.17.4) → Acceptable but outdated
- **Current**: 4.17.4 (Sept 2017)
- **Latest**: 4.17.21+
- **Status**: 4.17 branch is still maintained
- **Recommendation**: Upgrade to latest 4.17.x patch
- **Action**: `npm install lodash@latest --save`

#### node-schedule (1.1.0) → Outdated
- **Current**: 1.1.0 (May 2016)
- **Latest**: 2.1.0+
- **Status**: Not used in current codebase
- **Recommendation**: Verify if still needed, if not remove; if needed upgrade to 2.1.0+
- **Action**: Check code for usage, then `npm install node-schedule@latest` or remove

#### pm2 (1.0.2) → Severely Outdated
- **Current**: 1.0.2 (May 2015)
- **Latest**: 5.3.0+
- **Status**: Used for process management, very outdated
- **Recommendation**: Upgrade to 5.x
- **Action**: `npm install pm2@latest --save`

### Medium Priority - Testing

#### mocha (^3.5.3) → Outdated
- **Current**: 3.5.3 (Aug 2017)
- **Latest**: 10.2.0+
- **Recommendation**: Upgrade to 10.x
- **Breaking Changes**: Minor, mostly configuration updates
- **Update mocha.opts**: Migrate to `.mocharc.json` or `.mocharc.js`
- **Action**: `npm install mocha@latest --save-dev`

#### chai (^4.1.2) → Acceptable
- **Current**: 4.1.2 (Sept 2017)
- **Latest**: 4.3.10+
- **Recommendation**: Upgrade to latest 4.x
- **Action**: `npm install chai@latest --save-dev`

#### supertest (^3.0.0) → Outdated
- **Current**: 3.0.0 (Sept 2017)
- **Latest**: 6.3.3+
- **Recommendation**: Upgrade to 6.x
- **Action**: `npm install supertest@latest --save-dev`

#### chai-http (^3.0.0) → Outdated
- **Current**: 3.0.0 (Feb 2017)
- **Latest**: 4.4.0+
- **Recommendation**: Upgrade to 4.x
- **Action**: `npm install chai-http@latest --save-dev`

### Low Priority

#### multer (0.1.6) → Severely Outdated & Unused
- **Current**: 0.1.6 (ancient)
- **Status**: Not actively used in codebase
- **Recommendation**: Remove if not needed; if needed upgrade to 1.4.5+
- **Action**: Remove or upgrade

#### busboy (0.2.12) → Outdated
- **Current**: 0.2.12 (Feb 2015)
- **Status**: Dependency of older multer versions
- **Recommendation**: Remove if multer is removed/updated
- **Action**: Monitor for removal after multer update

#### should (8.3.0) → Outdated
- **Current**: 8.3.0 (2015)
- **Status**: Testing library, can be replaced with chai assertions
- **Recommendation**: Consider removing in favor of Chai
- **Action**: Evaluate test usage, potentially remove

---

## Frontend Dependencies Status

### Critical - Framework & Build Tools

#### angular (^1.6.6) → Legacy Framework
- **Current**: 1.6.6 (Dec 2016) - AngularJS (end-of-life Dec 2021)
- **Status**: No longer maintained; security vulnerabilities exist
- **Recommendation**: Consider migrating to React, Vue, or Angular 15+
- **Impact**: Major refactoring required
- **Action**: Plan long-term migration strategy
- **Alternative**: Accept EOL status and audit for security issues

#### webpack (^3.6.0) → Outdated
- **Current**: 3.6.0 (Sept 2017)
- **Latest**: 5.89.0+
- **Security Issues**: Contains known vulnerabilities
- **Recommendation**: Upgrade to 5.x
- **Breaking Changes**: Significant, webpack config requires updates
- **Migration Steps**:
  1. Upgrade to webpack 4.x first
  2. Update webpack.config.js for v4 compatibility
  3. Then upgrade to 5.x
- **Action**: Plan migration path, update loaders and plugins

#### babel-core (^6.26.0) & babel-loader (^7.1.2) → Deprecated
- **Current**: Babel 6
- **Latest**: Babel 7
- **Recommendation**: Migrate to Babel 7
- **Action**:
  ```bash
  npm install --save-dev @babel/core@latest @babel/preset-env@latest babel-loader@latest
  npm uninstall babel-core babel-preset-es2015 babel-loader
  ```

#### babel-preset-es2015 (^6.24.1) → Deprecated
- **Status**: Replaced by `@babel/preset-env`
- **Action**: Update .babelrc (see backend section)

### High Priority - Testing & Build

#### karma (^1.7.1) → Outdated
- **Current**: 1.7.1 (Sept 2017)
- **Latest**: 6.4.2+
- **Recommendation**: Upgrade to 6.x
- **Breaking Changes**: Configuration updates needed
- **Action**: `npm install karma@latest --save-dev`

#### jasmine-core (^2.8.0) → Outdated
- **Current**: 2.8.0 (Dec 2017)
- **Latest**: 5.1.0+
- **Recommendation**: Upgrade to 5.x
- **Action**: `npm install jasmine-core@latest --save-dev`

#### karma-jasmine (^1.1.0) → Outdated
- **Current**: 1.1.0 (May 2017)
- **Latest**: 5.1.0+
- **Recommendation**: Upgrade to match Karma and Jasmine versions
- **Action**: `npm install karma-jasmine@latest --save-dev`

#### karma-webpack (^2.0.4) → Outdated
- **Current**: 2.0.4 (Oct 2017)
- **Latest**: 5.0.0+
- **Recommendation**: Upgrade to compatible version with Webpack 5
- **Action**: `npm install karma-webpack@latest --save-dev`

#### karma-chrome-launcher (^2.2.0) → Outdated
- **Current**: 2.2.0 (May 2017)
- **Latest**: 3.2.0+
- **Recommendation**: Upgrade to 3.x
- **Action**: `npm install karma-chrome-launcher@latest --save-dev`

#### karma-phantomjs-launcher (^1.0.4) → Outdated
- **Current**: 1.0.4 (May 2017)
- **Latest**: 1.0.4 (no updates)
- **Status**: PhantomJS itself is unmaintained
- **Recommendation**: Consider switching to Headless Chrome or other modern browsers
- **Action**: Remove PhantomJS support, rely on Chrome/Firefox

### Medium Priority

#### clean-webpack-plugin (^0.1.16) → Outdated
- **Current**: 0.1.16 (May 2016)
- **Latest**: 4.0.0+
- **Recommendation**: Upgrade to 4.x for webpack 5 compatibility
- **Action**: `npm install clean-webpack-plugin@latest --save-dev`

#### copy-webpack-plugin (^4.0.1) → Outdated
- **Current**: 4.0.1 (June 2017)
- **Latest**: 11.0.0+
- **Recommendation**: Upgrade for webpack 5 compatibility
- **Action**: `npm install copy-webpack-plugin@latest --save-dev`

#### ng-annotate-loader (^0.6.1) → Outdated
- **Current**: 0.6.1 (May 2015)
- **Status**: Maintained but old
- **Recommendation**: Can keep or replace with `ng-annotate` package
- **Action**: Keep for now, consider refactoring AngularJS injection

#### ngtemplate-loader (^2.0.1) → Outdated
- **Current**: 2.0.1 (Jan 2017)
- **Status**: Still functional but older
- **Recommendation**: Keep or replace with webpack's built-in template handling
- **Action**: Keep for now

#### html-loader (^0.5.1) → Outdated
- **Current**: 0.5.1 (Feb 2017)
- **Latest**: 4.2.0+
- **Recommendation**: Upgrade for webpack 5 compatibility
- **Action**: `npm install html-loader@latest --save-dev`

### Acceptable Status

#### ng-annotate-webpack-plugin (^0.2.1-pre)
- **Status**: Pre-release but functional
- **Recommendation**: Can replace with `ng-annotate` package directly
- **Action**: Optional - keep or replace

#### ngstorage (^0.3.11)
- **Status**: Stable for AngularJS, not maintained but functional
- **Recommendation**: Keep for AngularJS compatibility
- **Action**: No action needed

#### babel-polyfill (^6.26.0)
- **Status**: Deprecated in Babel 7
- **Replacement**: `@babel/polyfill` or `core-js@3` + `regenerator-runtime`
- **Action**: Update after Babel migration

---

## Recommended Upgrade Path

### Phase 1: Critical Security Updates (Do First)
1. **Backend**:
   - Express: 4.15.4 → 4.18.2
   - jsonwebtoken: 8.0.1 → 9.1.0
   - Passport: 0.4.0 → 0.6.0

2. **Frontend**:
   - Audit for security vulnerabilities
   - Consider timeline for AngularJS migration

### Phase 2: Build Tool Modernization (Do Next)
1. **Backend**:
   - Babel 6 → Babel 7
   - Mocha 3 → Mocha 10

2. **Frontend**:
   - Babel 6 → Babel 7
   - Webpack 3 → Webpack 5 (requires careful migration)
   - Karma 1 → Karma 6

### Phase 3: Long-term Strategy (Plan Now)
1. **Framework Migration**:
   - Plan migration from AngularJS to React/Vue/Angular
   - This is a major undertaking but necessary for long-term maintainability

2. **Database Upgrade**:
   - Consider migrating from NeDB to MongoDB, PostgreSQL, or similar for scalability

---

## Security Concerns & Recommendations

### High Priority
1. **JWT Secret**: Currently hardcoded in source code
   - Recommendation: Use environment variables
   - Action: Move to `.env` file with `dotenv` package

2. **Password Hashing**: Passwords stored in plain text
   - Recommendation: Use `bcrypt` for password hashing
   - Action: Update user registration and login services

3. **CORS Configuration**: Allows all origins
   - Current: `app.use(cors())`
   - Recommendation: Restrict to specific domains
   - Action: Configure CORS with whitelist

4. **Input Validation**: Minimal validation on endpoints
   - Recommendation: Add schema validation using `joi` or `yup`
   - Action: Validate all user inputs

### Medium Priority
5. **Rate Limiting**: No rate limiting on API endpoints
   - Recommendation: Add `express-rate-limit`
   - Action: Implement rate limiting on login and voting endpoints

6. **Helmet**: No security headers
   - Recommendation: Add `helmet` package
   - Action: `npm install helmet --save`

7. **Environment-based Configuration**: No .env support
   - Recommendation: Add `dotenv` package
   - Action: Create .env.example and configure environment variables

### Low Priority
8. **HTTPS**: Configure for production use only (HTTP acceptable for dev)
9. **API Documentation**: Consider Swagger/OpenAPI documentation
10. **Logging**: Implement structured logging with `winston` or `pino`

---

## Migration Checklist

- [ ] Clean Node modules and package-lock.json
- [ ] Backup current working state in git
- [ ] Update package.json with new versions
- [ ] Test each major update separately
- [ ] Update configuration files (.babelrc, webpack.config.js, mocha.opts)
- [ ] Run full test suite after each phase
- [ ] Update loaders and plugins for new tool versions
- [ ] Test application in all supported browsers
- [ ] Update CI/CD pipeline if present

---

## Resources

- [Babel 7 Migration Guide](https://babeljs.io/docs/en/v7-migration)
- [Webpack 5 Migration Guide](https://webpack.js.org/migrate/5/)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

