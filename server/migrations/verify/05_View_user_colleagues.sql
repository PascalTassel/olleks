-- Verify olleks:05_View_user_colleagues on pg

BEGIN;

SELECT * FROM get_user_colleagues;

ROLLBACK;
                        