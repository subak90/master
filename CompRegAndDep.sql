SET VERIFY OFF
SET FEEDBACK OFF
SET SERVEROUT ON
--------------------------------------------------------------------------------
PROMPT Pre Register CRM
-- [IFS COMPLETE BLOCK BEGINEND]
BEGIN
   Installation_SYS.Pre_Register('CRM', SUBSTR('PRE-Customer Relationship Management', 1, 50), 'TRUE',  'TRUE');
   Installation_SYS.Register_Dependency('CRM', 'LCSINT', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'MARINT', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'EREP', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'FNDMOB', 'STATIC');
   Installation_SYS.Register_Dependency('CRM', 'PAYLED', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'SRVCON', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'PROJ', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'CALLC', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'WO', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'RMPANL', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'CRM', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'FNDCOB', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'ESTMAN', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'FNDMIG', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'SRM', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'CONMGT', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'DOCMAN', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'SRVQUO', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'CFGCHR', 'DYNAMIC');
   Installation_SYS.Register_Dependency('CRM', 'RMCOM', 'STATIC');
   Installation_SYS.Register_Dependency('CRM', 'ORDER', 'STATIC');
END;
-- [END IFS COMPLETE BLOCK]
/
--------------------------------------------------------------------------------
PROMPT Pre Register TRVEXP
-- [IFS COMPLETE BLOCK BEGINEND]
BEGIN
   Installation_SYS.Pre_Register('TRVEXP', SUBSTR('PRE-Travel Expenses', 1, 50), 'FALSE',  'FALSE');
   Installation_SYS.Register_Dependency('TRVEXP', 'NTFYME', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'DOCBB', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'MPCCOM', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'DOCMAN', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'MSCOM', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'PURCH', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'EQUIP', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'FNDMIG', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'TIMREP', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'PAYINT', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'WRKSCH', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'WO', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'TRVALL', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'PROJ', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'PRJREP', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'ORDER', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'INVOIC', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'EMPPAY', 'DYNAMIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'FNDML', 'STATIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'PERSON', 'STATIC');
   Installation_SYS.Register_Dependency('TRVEXP', 'FNDMOB', 'STATIC');
END;
-- [END IFS COMPLETE BLOCK]
/
--------------------------------------------------------------------------------
SET SERVEROUT OFF
