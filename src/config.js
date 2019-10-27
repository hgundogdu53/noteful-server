module.exports = {
    PORT: process.env.PORT || 8001,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://welnarcfvqtyrp:c0710755983b1456d4b236b265e174cb74f68d0b72f398849e879edb1a667fb5@ec2-54-83-202-132.compute-1.amazonaws.com:5432/ddlv7hrb22999n',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://dunder_mifflin@localhost/blogful-test'

}