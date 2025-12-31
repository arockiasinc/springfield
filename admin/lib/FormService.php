<?php

/**
 * Copyright (C) Vincy - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Vincy <vincy@phppot.com>
 */

/**
 * Service class for handling the email sending process.
 */
class FormService
{

    /**
     * exit function for AJAX calls
     *
     * @param \JsonSerializable $output
     * @param boolean $clearToken
     */
    function endAction($output, $clearToken = false)
    {
        if ($clearToken == true) {
            require_once __DIR__ . '/../lib/AntiCSRF.php';
            $antiCSRF = new AntiCSRF();
            $antiCSRF->unsetToken();
            require_once __DIR__ . '/../lib/AntiSpam.php';
            $antiSpam = new AntiSpam();
            $antiSpam->cleanUp();
        }
        die($output);
    }

    /**
     * Short circuit type function to stop the process flow on validation failure.
     */
    function validateCSRFAttack()
    {
        // to validate for CSRF attacks
        require_once __DIR__ . '/AntiCSRF.php';
        $antiCSRF = new AntiCSRF();
        $isValidRequest = $antiCSRF->isValidRequest();
        if (!$isValidRequest) {
            $output = $this->createJsonInstance("Error 1020: Security Issue. CSRF Attack!");
            $this->endAction($output);
        }
    }

    /**
     * Short circuit type function to stop the process flow on validation failure.
     *
     * @param string $formToken
     */
    function validateBruteForceAttack($formToken)
    {
        // to validate for brute force or automatic throttled quick submission by bots
        require_once __DIR__ . '/AntiSpam.php';
        $antiSpam = new AntiSpam();
        $isValidInterval = $antiSpam->isBruteForce($formToken);
        if ($isValidInterval) {
            $output = $this->createJsonInstance("Error 1021: Security Issue. Brute force attack!");
            $this->endAction($output);
        }
    }

    /**
     * Short circuit type function to stop the process flow on validation failure.
     *
     * @param string $honeyPot
     * @param string $dummyEmail
     */
    function validateBotSpam($honeyPot, $dummyEmail)
    {
        $cfSpinner = htmlspecialchars($honeyPot);
        $cfDummyEmail = htmlspecialchars($dummyEmail);
        $isDummyEmpty = (empty($cfSpinner) && empty($cfDummyEmail));
        if (!$isDummyEmpty) {
            $output = $this->createJsonInstance("Error 1022: Security Issue. Bot spam detected!");
            $this->endAction($output);
        }
    }

    /**
     * utility function to create a JSON instance
     *
     * @param string $message
     * @param string $type
     * @return string
     */
    function createJsonInstance($message, $type = 'error')
    {
        $messageArray = array(
            'type' => $type,
            'text' => $message
        );
        // Leave the below line commented and do not delete it
        // this will be required to debug the ascented chars multi-language
        // $messageArray = array_map('utf8_encode', $messageArray);
        $jsonObj = json_encode($messageArray);
        return $jsonObj;
    }

    function validateStopWords($message)
    {
        require_once __DIR__ . '/Config.php';
        if (!empty(Config::stopWords)) {
            foreach (Config::stopWords as $stopWords) {
                if (stripos($message, $stopWords) !== false) {
                    return false;
                }
            }
        }
        return true;
    }
}
